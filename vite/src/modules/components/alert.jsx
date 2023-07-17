import { notification } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"

const alert = {
  success: (message, description, duration = 3) => {
    notification.success({
      duration,
      message,
      description,
      placement: "topRight",
    })
  },

  error: error => {
    const fixedMessage = (error.message || error).replace("GraphQL error: ", "")

    notification.error({
      duration: 5,
      message: fixedMessage,
      placement: "topRight",
      icon: <ExclamationCircleOutlined style={{ color: "#EF5350" }} />,
    })
  },

  info: message => {
    notification.info({
      duration: 3,
      message,
      placement: "topRight",
    })
  },

  warn: message => {
    notification.warn({
      duration: 3,
      message,
      placement: "topRight",
    })
  },
}

export default alert
