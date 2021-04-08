import math
import random

class Desk:
    def __init__(self, desk_id, x, y, teacher, whiteboard):
        self.id=desk_id
        self.x=x
        self.y=y
        self.distances=[[0],[0],[0],[0]]
        self.filled=True
        self.distance_to_teacher= math.sqrt((self.x - teacher["left"]) ** 2 + (self.y - teacher["top"]) ** 2)
        self.distance_to_whiteboard= math.sqrt((self.x - whiteboard["left"]) ** 2 + (self.y - whiteboard["top"]) ** 2)
        self.filled=False
        self.student=0

    def __repr__(self):
        fill= "open"
        if self.filled:
            fill="filled"
        return "This is a "+fill+" desk at (" + str(self.x) + "," + str(self.y) + "). The student sitting here is " + str(self.student)

class Student:
    def __init__(self, name, visibility, extra_help, hate_lst):
        self.name = name
        self.visibility = visibility
        self.extra_help = extra_help
        self.hate_lst= hate_lst
        self.seated=False
        if not self.visibility and self.extra_help:
            self.section = 0
        elif self.visibility:
            self.section = 1
        elif self.extra_help:
            self.section = 2
        else:
            self.section = 3

    def __repr__(self):
        if self.extra_help:
            eh="need extra help"
        else:
            eh="do not need extra help"
        if self.visibility:
            vis="can see well"
        else:
            vis= "cannot see well"
        return "This student's name is " + str(self.name) + ", they " + vis +", and they " + eh

def main(desks, students, whiteboard, teacher):
    dictionary = {}
    desk_lst=[]
    student_lst=[]
    sec0, sec1, sec2, sec3=0, 0, 0, 0
    for i in desks.keys():
        desk_lst.append(Desk(i, desks[i]["left"], desks[i]["top"], teacher, whiteboard))
    desks=desk_lst  
    for i in list(range(len(students))):
        student_lst.append(Student(students[i]["name"], students[i]["visibility"], students[i]["extra_help"], students[i]["hate"]))
    students=student_lst
    for i in students:
        if i.section==0:
            sec0+=1
        elif i.section==1:
            sec1+=1
        elif i.section==2:
            sec2+=1
        else:
            sec3+=1
    desks_to_whiteboard=order_desks(desks, "whiteboard")
    section_0_and_1=order_desks(desks_to_whiteboard[:sec0+sec1], "teacher")
    section_2_and_3=order_desks(desks_to_whiteboard[sec0+sec1:], "teacher")
    desks = [section_0_and_1[:sec0], section_0_and_1[sec0:], section_2_and_3[:sec2],section_2_and_3[sec2:]]
    old_students=students
    students=order_students_by_section(students)
    result = pair(students, desks, old_students)
    for i in students:
        for j in i:
            if j.name not in result.values():
                unfilled = []
                for x in desks[j.section]:
                    if x.id not in result.keys():
                        unfilled.append(x)
                if (len(unfilled) != 0):
                    result[random.choice(unfilled).id] = j.name

    return result

def distance(loc1, loc2):
    x1 = loc1.x
    y1 = loc1.y
    x2 = loc2.x
    y2 = loc2.y
    return math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

def add_to_desk(desk, student):
    desk.student=student.name
    desk.filled=True
    student.seated=True

def order_students_by_section(students):
    sectioned_students= [[], [], [], []]
    for i in students:
        if i.section == 0:
            sectioned_students[0].append(i)
        elif i.section == 1:
            sectioned_students[1].append(i)
        elif i.section == 2:
            sectioned_students[2].append(i)
        else:
            sectioned_students[3].append(i)
    return sectioned_students

def order_desks(desks, attr):
    desk_tuples = []
    final_desk_list = []
    boolean=False
    if attr == "teacher":
        boolean=True
    for i in desks:
        if boolean:
            val = i.distance_to_teacher
        else:
            val= i.distance_to_whiteboard
        desk_tuples.append((i.id, val, desks.index(i)))
    desk_tuples.sort(key=lambda x: x[1])
    for i in desk_tuples:
        final_desk_list.append(desks[i[2]])
    return final_desk_list

def get_distances(desks, desk, section):
    if desk.distances[section][0] == 0:
        dist_lst = []
        for i in desks[section]:
            dist_lst.append((i, distance(desk, i)))
        dist_lst.sort(key=lambda x: x[1])
        for i in dist_lst:
            desk.distances[section].append(i[0])
    return desk.distances[section]

def pair(students, desks, old_students):
    hate_lst = [[], [], [], []]
    no_hate_lst = [[], [], [], []]
    result = {}
    for i in list(range(4)):
        for j in students[i]:
            if not j.hate_lst == 0:
                hate_lst[i].append(j)
            else:
                no_hate_lst[i].append(j)
    for i in list(range(4)):
        random.shuffle(hate_lst[i])
        for a in hate_lst[i]:
            if not a.seated:
                desk_a = random.choice(desks[a.section])
                result[desk_a.id] = a.name
                add_to_desk(desk_a, a)
                random.shuffle(a.hate_lst)
                for j in a.hate_lst:
                    for x in old_students:
                        if x.name == j:
                            j = x
                    if not j.seated:
                        dists = get_distances(desks, desk_a, j.section)
                        try:
                            hate_lst[j.section].remove(j)
                        except ValueError:
                            print(j)
                        result[dists[random.randint(math.ceil(len(dists)/2), int(len(dists)))-1].id] = j.name
                        #add_to_desk(dists[random.randint(math.ceil(len(dists)/2), int(len(dists)))-1], j)
            #hate_lst[i].remove(a)
    return result