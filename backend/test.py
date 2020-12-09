from passlib.context import CryptContext

pwd_context = CryptContext(
        schemes=["pbkdf2_sha256"],
        default="pbkdf2_sha256",
        pbkdf2_sha256__default_rounds=30
)

print(pwd_context.hash("IM A CHUNKY MONKEY!") == pwd_context.hash("IM A CHUNKY MONKEY!"))