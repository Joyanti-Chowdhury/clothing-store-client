"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { Box, Container, Divider, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Products from "./Products";
import { CheckBox } from "@mui/icons-material";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const AllProductss = ({ products }: { products: any }) => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  React.useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleCheckboxChange = (filterType: string, value: string) => {
    const filtered = products.filter((product) => {
      switch (filterType) {
        case "category":
          return product.category === value;
        case "ratings":
          const rating = parseFloat(value);
          return product.ratings >= rating && product.ratings < rating + 1;
        case "price":
          const priceFiltered = checkPriceRange(product.price, value);
          return priceFiltered;
        default:
          return true;
      }
    });
    setFilteredProducts(filtered);
  };

  const checkPriceRange = (price: number, range: string) => {
    const [min, max] = range
      .split("-")
      .map((range) => parseFloat(range.trim()));
    return price >= min && price <= max;
  };

  return (
    <Container
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <List
          sx={{
            width: "100%",
            maxWidth: 200,
            bgcolor: "background.paper",
            mt: 5,
          }}
        >
          <Typography>Price Range</Typography>
          {[100, 200, 300, 400].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            {
              ["0 - 50", "51 - 60", "61 - 70", "71 - 80", "81 - 100"].map(
                (range, idx) => (
                  <CheckBox
                    className="block"
                    key={idx}
                    onChange={() => handleCheckboxChange("price", range)}
                  >
                    {`$${range}`}
                  </CheckBox>
                )
              );
            }
 
            return (
              <ListItem
                sx={{ border: "1px solid gray" }}
                key={value}
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`$ ${value + 100}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>


        <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
 
    </FormGroup>










        <Divider />

        <Box sx={{ width: "200px", mt: 5 }}>
          <Typography>Brands</Typography>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>kids</Typography>
              <Typography sx={{ color: "text.secondary" }}></Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Gents
              </Typography>
              <Typography sx={{ color: "text.secondary" }}></Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Females
              </Typography>
              <Typography sx={{ color: "text.secondary" }}></Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {" "}
                Accessory
              </Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
        </Box>

        <Divider />

        <List
          sx={{
            width: "100%",
            maxWidth: 200,
            bgcolor: "background.paper",
            mt: 5,
          }}
        >
          <Typography> Ratings </Typography>
          {[4.8, 4.5, 4.4, 4.9].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                sx={{ border: "1px solid gray" }}
                key={value}
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`* ${value}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box>
        <Products></Products>
      </Box>
    </Container>
  );
};

export default AllProductss;
