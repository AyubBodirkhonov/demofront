import { DomainAdd } from "@mui/icons-material";
import {
  Modal,
  Stack,
  Typography,
  styled,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BoxDiv = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "50%",
  height: 800,
  backgroundColor: "#ffff",
  border: "none",
  boxShadow: 24,
  color: "rgba(50,61,69,0.7)",
  p: 4,
}));
const Sidebar = ({visible, handleClose}) => {
  return (
    <Box handleOpen={visible}>
      <Modal
        open={visible}
        onClose={() => handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxDiv>
          <Box>
            <Typography
              color="primary"
              sx={{
                fontSize: "15px",
                padding: "10px 25px",
              }}
            >
              <strong>CAPA</strong> 파트너스
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              paddingTop: "36px",
              paddingLeft: "32px",
              display: "flex",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <Stack direction="row"  gap={1} marginBottom={2}>
              <DomainAdd fontSize="12px" />
              <Typography
                id="modal-modal-title"
                sx={{ fontSize: "14px", color:"#323D45"}}
              >
                파트너정밀가공
              </Typography>
            </Stack>
            <Typography id="modal-modal-description" sx={{ fontSize: "14px", color:"#323D45" }}>
              로그아웃
            </Typography>
          </Box>
        </BoxDiv>
      </Modal>
    </Box>
  );
};

export default Sidebar;
