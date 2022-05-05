import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};
const MenuProps2 = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const names = ["밀링", "선반"];
const products = ["알류미늄", "탄소강", "구리", "합금강", "강철"];

const MyForm = () => {
  const [personName, setPersonName] = React.useState([]);
  const [productName, setProductName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeProduct = (event) => {
    const {
      target: { value },
    } = event;
    setProductName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <FormControl sx={{ mt: 1, minWidth: 100}}  size="small">
        <InputLabel id="demo-multiple-checkbox-label" sx={{fontSize:"12px"}}>가공방식</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          sx={{fontSize:"12px"}}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 70 }} size="small">
        <InputLabel id="demo-multiple-checkbox-label"  sx={{fontSize:"12px"}}>재료</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={productName}
          onChange={handleChangeProduct}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps2}
          sx={{fontSize:"12px"}}
        >
          {products.map((product) => (
            <MenuItem key={product} value={product}>
              <Checkbox checked={productName.indexOf(product) > -1} />
              <ListItemText primary={product} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default MyForm;
