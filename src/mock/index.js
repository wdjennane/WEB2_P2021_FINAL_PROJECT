import PhisingMock from "./le-phishing"
import RevengePornMock from "./le-revenge-porn"
import TracesNumeriquesMock from "./les-traces-numeriques"

const mock = [
  { endpoint: "le-phishing", results: PhisingMock },
  { endpoint: "le-revenge-porn", results: RevengePornMock },
  { endpoint: "les-traces-numeriques", results: TracesNumeriquesMock },
]

export default mock
