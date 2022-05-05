import {
  Box,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import MyForm from "./UI/MyForm";

const MyContainer = styled(Container) (({theme}) => ({
  [theme.breakpoints.up("lg")]: {
    minWidth: "1200px"
  },
  [theme.breakpoints.up("md")]: {
    minWidth: "800px"
  },
  [theme.breakpoints.down("xs")]: {
    minWidth: "600px",
    display: "flex",
    justifyContent: "center"
  },

}));
const MyStack = styled(Stack) (({theme}) => ({
  [theme.breakpoints.up("sm")]: {
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  [theme.breakpoints.only("xs")]: {
    display:"flex",
    flexDirection: "column",
  },



}));
const Home = () => {
  return (
    <MyContainer maxWidth="fixed">
      <Grid mt={5}>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "32px",
            fontWeight: "bold",
            color: "rgba(50,61,69,1)",
          }}
        >
          들어온 요청
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          mt={1}
          fontWeight={100}
          color="rgba(50,61,69,0.8);"
          sx={{fontSize: {xs:"14px", sm: "16px"}}}
        >
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </Typography>
        <Grid item>
          <MyStack direction="row" justifyContent="space-between">
            <Box>
              <MyForm />
            </Box>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="상담 중인 요청만 보기"
            />
          </MyStack>
        </Grid>
        <Container
          sx={{
            position: "relative",
            width: "100%",
            border: "1px solid lightgrey",
            marginTop: "40px",
            height: "100px",
            borderRadius: "5px",
            maxWidth: "fixed",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <Typography
              variant="span"
              sx={{
                color: "rgba(147,159,165,1)",
                fontSize: "14px",
              }}
            >
              조건에 맞는 견적 요청이 없습니다.
            </Typography>
          </Box>
        </Container>
      </Grid>
    </MyContainer>
  );
};

export default Home;
