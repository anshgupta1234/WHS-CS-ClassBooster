import React, { useState, useCallback } from 'react';
import { Container } from './Container';
import { CustomDragLayer } from './CustomDragLayer';

export const Example = (desks, updateDesks, deleteDesk) => {
	
    return (<div>
			<Container snapToGrid={true} desks={desks} updateDesks={updateDesks} deleteDesk={deleteDesk}/>
			<CustomDragLayer snapToGrid={false}/>
		</div>);
};
