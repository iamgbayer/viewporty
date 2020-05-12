import React, { useContext } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'

import { hasTenantOfString } from '../helpers'
import { Input, Text, Button } from '../components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const Content = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 45px;
  background-color: ${theme('colors.support.primary')};
  border: 1px solid ${theme('colors.support.secondary')};
  border-radius: ${theme('border.radius.five')};
`

const Domain = styled.div`
  display: flex;
  align-items: flex-end;
`

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid format')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .required('Required'),
  company: Yup.string().required('Required'),
  domain: Yup.string().required('Required')
})

const initialValues = {
  name: '',
  email: '',
  password: '',
  company: '',
  domain: ''
}

export async function getServerSideProps({ req }) {
  const hasTenant = hasTenantOfString(req.headers.host)

  return {
    props: {}
  }
}

export default function Signup() {
  const { colors } = useContext(ThemeContext)

  const { handleChange, values, isValid, errors, validateForm } = useFormik({
    initialValues,
    isInitialValid: validationSchema.isValidSync(initialValues),
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema,
    onSubmit: console.info
  })

  const { name, email, password, company, domain } = values

  const signup = () => {
    validateForm()
  }

  return (
    <Container>
      <Content>
        <Text size="twenty" color={colors.seventiary} weight="bold" bottom={30}>
          Start using feedl now!
        </Text>

        <Input
          id="name"
          full={true}
          label="Your complete name"
          placeholder="John Doe"
          value={name}
          error={{
            has: !!errors.name,
            message: errors.name
          }}
          onChange={handleChange}
          bottom={10}
        />

        <Input
          id="email"
          full={true}
          label="Email"
          placeholder="john@doe.com"
          onChange={handleChange}
          error={{
            has: !!errors.email,
            message: errors.email
          }}
          value={email}
          bottom={10}
        />

        <Input
          id="password"
          full={true}
          placeholder="••••••••"
          label="Password"
          error={{
            has: !!errors.password,
            message: errors.password
          }}
          onChange={handleChange}
          value={password}
          bottom={10}
        />

        <Input
          id="company"
          full={true}
          label="Company name"
          placeholder="John Corporate"
          onChange={handleChange}
          error={{
            has: !!errors.company,
            message: errors.company
          }}
          value={company}
          bottom={10}
        />

        <Domain>
          <Input
            id="domain"
            label="Domain"
            placeholder="john-corporate"
            error={{
              has: !!errors.domain,
              message: errors.domain
            }}
            onChange={handleChange}
            value={domain}
          />

          <Text left={15} bottom={10} color={colors.seventiary}>
            .feedl.co
          </Text>
        </Domain>

        <Button onClick={signup} top={45} full={true} variant="secondary">
          Signup
        </Button>
      </Content>
    </Container>
  )
}
