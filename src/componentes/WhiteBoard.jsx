import React from 'react'
import { Card, Button,  useTheme} from '@aws-amplify/ui-react';

export const WhiteBoard = ({props}) => {
    const { tokens } = useTheme();
  return (
    <Card
    columnStart="2"
    columnEnd="-1"
    backgroundColor={tokens.colors.background.secondary}

  > <h1>Hello {props.username}</h1>

    Main
  </Card>
  )
}
