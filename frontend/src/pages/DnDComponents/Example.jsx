import React, { useState, useCallback } from 'react';
import { Container } from './Container';
import { CustomDragLayer } from './CustomDragLayer';
export const Example = () => {
    return (<div>
			<Container snapToGrid={true}/>
			<CustomDragLayer snapToGrid={false}/>
		</div>);
};
