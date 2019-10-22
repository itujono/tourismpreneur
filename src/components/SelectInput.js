import React from 'react'
import styled from 'styled-components'
import { Select, Form } from 'antd'
import { baseStyles } from '../styles'

const StyledSelect = styled(Select)`
	border-radius: 2px;
	border: 1.5px solid ${baseStyles.lightGrey.three};
	&:focus,
	&:hover {
		border-color: ${baseStyles.secondaryColor};
	}
`

const FormItem = styled(Form.Item)`
	margin-bottom: 1em;
`

export default function SelectInput({ name, label, options, ...props }) {
	return (
		<FormItem name={name} label={label}>
			<StyledSelect {...props}>
				{options.map(({ value, label }) => (
					<Select.Option key={value} value={value}>
						{label}
					</Select.Option>
				))}
			</StyledSelect>
		</FormItem>
	)
}
