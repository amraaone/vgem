import * as dotenv from "dotenv"
import * as Random from "meteor-random"

dotenv.config()

export const field = options => {
  const { pkey, type, optional } = options

  if (type === String && !pkey && !optional) {
    options.validate = /\S+/
  }

  // TODO: remove
  if (pkey) {
    options.type = String
    options.default = () => Random.id()
  }

  return options
}
