import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols || '12'}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly} type={props.type}
            /> 
        </div>
    </Grid>
)