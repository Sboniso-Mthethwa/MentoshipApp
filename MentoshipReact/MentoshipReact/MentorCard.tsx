import * as React from 'react';
import { Label } from '@fluentui/react-components';

export interface IMentorCardProps {
  name?: string;
  role?: string;
}

export function MentorCard(props: IMentorCardProps): React.ReactElement {
  return (
    <>
      <Label>
        Mentor: {props.name}!
      </Label>
      
      <Label>
        Role: {props.role}!
      </Label>
    </>
    )
  }

