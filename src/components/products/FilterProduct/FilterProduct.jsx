import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TuneIcon from "@mui/icons-material/Tune";
// custom
import { useProducts } from "../../../contexts/ProductContextProvider";

export default function RadioButtonsGroup() {
	const { fetchByParams } = useProducts();

	return (
		<div className='sidebar_container'>
			<div className='sidebar_title'>
				<TuneIcon />
				<h3>Filters</h3>
			</div>
			<div className='sidebar_content'>
				<FormControl>
					<FormLabel id='demo-radio-buttons-group-label'>Categories</FormLabel>
					<RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='all' name='radio-buttons-group' onChange={e => fetchByParams("gender", e.target.value)}>
						<FormControlLabel value='all' control={<Radio />} label='ALL' />
						{/* <FormControlLabel value='brand' control={<Radio />} label='BRANDS' /> */}
						<FormControlLabel value='women' control={<Radio />} label='Women' />
						<FormControlLabel value='men' control={<Radio />} label='Men' />
						<FormControlLabel value='unisex' control={<Radio />} label='Unisex' />
					</RadioGroup>
				</FormControl>
			</div>
		</div>
	);
}
