import React from 'react';
import { Typography } from '@material-ui/core';

export default function Jobs({job}) {
    return (
        <div className={"job"}>
            <Typography>{job.title}</Typography>
            <Typography>{job.company}</Typography>
        </div>
    )
}