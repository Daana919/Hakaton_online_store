import * as React from "react";
import "../../../styles/ProductSideBar.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TuneIcon from "@mui/icons-material/Tune";
// custom
import { useProducts } from "../../../contexts/ProductContextProvider";
//accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function RadioButtonsGroup() {
	const { fetchByParams } = useProducts();

	function handleGenderChange(event) {
		const searchParam = event.target.value.toLowerCase();
		fetchByParams("gender", searchParam); // Fetch products based on gender filter
	}


	function handleBrandsChange(e) {
		const searchParam = e.target.value;
		fetchByParams("brand", searchParam);
	}
	function handleDiameterChange(e) {
		const searchParam = e.target.value;
		fetchByParams("diameter", searchParam);
	}

	function handleMaterialChange(e) {
		const searchParam = e.target.value;
		fetchByParams("material", searchParam);
	}

	return (
		<div className='sidebar_container'>
			<div className='sidebar_title'>
				<TuneIcon />
				<h3>Filters</h3>
			</div>
			<div className='sidebar_content'>
				<div className='sidebar_inner_accordion'>
					<Accordion className='sidebar_accordion'>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
							<Typography>Brands</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormControl>
								<RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='all' name='radio-buttons-group' onChange={handleBrandsChange}>
									<FormControlLabel value='all' control={<Radio color='default' />} label='Shop All Brands' />
									<FormControlLabel value='Zenith' control={<Radio color='default' />} label='Zenith' />
									<FormControlLabel value='Rolex' control={<Radio color='default' />} label='Rolex' />
									<FormControlLabel value='Audemars Piguet' control={<Radio color='default' />} label='Audemars Piguet' />
									<FormControlLabel value='Tissot' control={<Radio color='default' />} label='Tissot' />
								</RadioGroup>
							</FormControl>
						</AccordionDetails>
					</Accordion>
					<Accordion className='sidebar_accordion'>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2a-content' id='panel2a-header'>
							<Typography>Gender</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormControl>
								<RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='all' name='radio-buttons-group' onChange={handleGenderChange}>
									<FormControlLabel value='all' control={<Radio color='default' />} label='All' />
									<FormControlLabel value='women' control={<Radio color='default' />} label='Women' />
									<FormControlLabel value='men' control={<Radio color='default' />} label='Men' />
									<FormControlLabel value='unisex' control={<Radio color='default' />} label='Unisex' />
								</RadioGroup>
							</FormControl>
						</AccordionDetails>
					</Accordion>
					<Accordion className='sidebar_accordion'>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2a-content' id='panel2a-header'>
							<Typography>Diameter</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormControl>
								<RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='all' name='radio-buttons-group' onChange={handleDiameterChange}>
									<FormControlLabel value='all' control={<Radio color='default' />} label='All' />
									<FormControlLabel value='37' control={<Radio color='default' />} label='37' />
									<FormControlLabel value='38' control={<Radio color='default' />} label='38' />
									<FormControlLabel value='39' control={<Radio color='default' />} label='39' />
									<FormControlLabel value='40' control={<Radio color='default' />} label='40' />
									<FormControlLabel value='41' control={<Radio color='default' />} label='41' />
									<FormControlLabel value='42' control={<Radio color='default' />} label='42' />
								</RadioGroup>
							</FormControl>
						</AccordionDetails>
					</Accordion>
					<Accordion className='sidebar_accordion'>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2a-content' id='panel2a-header'>
							<Typography>Material</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormControl>
								<RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='all' name='radio-buttons-group' onChange={handleMaterialChange}>
									<FormControlLabel value='all' control={<Radio color='default' />} label='All' />
									<FormControlLabel value='Steel' control={<Radio color='default' />} label='Steel' />
									<FormControlLabel value='Stainless Steel' control={<Radio color='default' />} label='Stainless Steel' />
								</RadioGroup>
							</FormControl>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
