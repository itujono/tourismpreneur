import React from 'react'
import styled from 'styled-components'
import { Input, Form } from 'antd'
import { baseStyles } from '../styles'

const StyledInput = styled(Input)`
	border-radius: 2px;
	border: 1.5px solid ${baseStyles.lightGrey.three};
	&:focus,
	&:hover {
		border-color: ${baseStyles.secondaryColor};
	}
`

const StyledTextarea = styled(Input.TextArea)`
	border-radius: 2px;
	border: 1.5px solid ${baseStyles.lightGrey.three};
	&:focus,
	&:hover {
		border-color: ${baseStyles.secondaryColor};
	}
`

const StyledSearch = styled(Input.Search)`
	width: 100%;
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

export default function TextInput({ name, label, textarea, search, ...props }) {
	if (textarea) {
		return (
			<FormItem name={name} label={label}>
				<StyledTextarea {...props} rows={4} />
			</FormItem>
		)
	}

	if (search) {
		return (
			<FormItem name={name} label={label}>
				<StyledSearch {...props} size="large" />
			</FormItem>
		)
	}

	return (
		<FormItem name={name} label={label}>
			<StyledInput {...props} size="large" />
		</FormItem>
	)
}
