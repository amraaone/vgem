import { Button, Form, Input, Segmented } from "antd"
import { useState } from "react"

const Login = ({ login, register }) => {
  const [value, setValue] = useState("Login")

  const renderSegmentForm = () => {
    if (value === "Login") {
      return (
        <Form name="basic" onFinish={login} layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className="h-11" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className="h-11" />
          </Form.Item>

          <Form.Item>
            <Button
              className="w-full"
              type="primary"
              size="large"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      )
    }

    if (value === "Register") {
      return (
        <Form name="basic" onFinish={register} layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input className="h-11" />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input className="h-11" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className="h-11" />
          </Form.Item>

          <Form.Item
            label="Verify password"
            name="verifyPassword"
            rules={[
              {
                required: true,
                message: "Please input your password again!",
              },
            ]}
          >
            <Input.Password className="h-11" />
          </Form.Item>

          <Form.Item>
            <Button
              className="w-full"
              type="primary"
              size="large"
              htmlType="submit"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      )
    }

    return null
  }

  return (
    <div className="flex items-center justify-center h-screen overflow-auto">
      <div className="w-96">
        <Segmented
          block
          options={["Login", "Register"]}
          onChange={value => {
            setValue(value)
          }}
        />

        <div className="py-8">{renderSegmentForm()}</div>
      </div>
    </div>
  )
}

export default Login
