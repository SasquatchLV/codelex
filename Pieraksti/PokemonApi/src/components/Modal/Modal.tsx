import { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'

type ModalProps = {
  show: boolean
  onHide: () => void
  url?: string
}

const myModal: FC<ModalProps> = ({ show, onHide, url }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="modal"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="modal">
        Modal heading
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Centered Modal</h4>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
)

export default myModal
