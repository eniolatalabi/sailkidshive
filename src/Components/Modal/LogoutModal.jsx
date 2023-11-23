//import neccesary dependencies
import { Modal, Button } from 'antd';

// Define the LogoutModal component
const LogoutModal = ({ visible, handleLogout, handleClose }) => {
  return (
    <Modal
    // Control the visibility of the modal using the "visible" prop
      open={visible}
      title="Logout"
      // Handle the close action when clicking outside or pressing "Cancel"
      onCancel={handleClose}
      className="font-[poppins-regular]"

      // Customize the footer buttons
      footer={[
        <Button key="cancel" onClick={handleClose} className="font-[poppins-regular]">
          Cancel
        </Button>,
        <Button key="logout" type="primary" className="font-[poppins-regular] bg-[#9B5DE6]"onClick={handleLogout}>
          Logout
        </Button>,
      ]}
    >
      <p>Are you sure you want to log out?</p>
    </Modal>
  );
};

// Export the LogoutModal component for use in other parts of the application
export default LogoutModal;
