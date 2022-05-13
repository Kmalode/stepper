import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));





function getSteps() {
  return [
    "Pet Parent",
    "Pet's Details",
    "Book Appointments",
  ];
}
const PetParent = () => {

  
  const { control } = useFormContext();
  return (
    
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            required
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />



      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email id"
            fullWidth
            required
            margin="normal"
            {...field}
          />
        )}
      />

<Controller
        control={control}
        name="phoneNo"
        render={({ field }) => (
          <TextField
            id="phoneNo"
            label="Phone no"
            variant="outlined"
            name="phone" 
            placeholder="Enter your Phone no" 
            pattern="[789][0-9]{9}" 
            required
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />


    </>
  );
};
const Pet = () => {
  const data = {
    countries: [
      

      {
        name: "Cat",
        states: [
          {
            name: "Bengal cat"
          },
          {
            name: " British Short hair X"
          },
          {
            name: "Persion Cat"
          },
          {
            name: "Himalayan Cat"
          }
          
        ]
      },
      {
        name: "Dog",
        states: [
          {
            name: "Cross breed"
          },
          {
            name: "Doberman"
          },
          {
            name: "German Shephard"
          },
          {
            name: "Hushky"
          }
          
        ]
      }
    ]
  };
 
  const { control } = useFormContext();
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();

  
  const availableState = data.countries.find((c) => c.name === selectedCountry);
  
  
  return (
    <>

<Controller
        control={control}
        name="petName"
        render={({ field }) => (
          <TextField
          id="petName"
          label="Pet Name"
          variant="outlined"
          placeholder="Enter Pet's Name"
          fullWidth
          required
          margin="normal"
          {...field}
        />
        )}
      />

<Controller
        control={control}
        name="category"
        render={({ field }) => (
<FormControl fullWidth margin="normal">
  <InputLabel id="demo-simple-select-label">Pet Category</InputLabel>
          <Select 
          id="category"
         label="Category"
          placeholder="Select Pet Category"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          fullWidth
          required 
          
        
        >
          <MenuItem>--Select Pet Category--</MenuItem>
          {data.countries.map((value, key) => {
            return (
              <MenuItem value={value.name} key={key}>
                {value.name}
              </MenuItem>
            );
          })}
        </Select>
        </FormControl>
        )}
/>



      <Controller
        control={control}
        name="type"
        render={({ field }) => (
          <FormControl fullWidth  margin="normal">
  <InputLabel id="demo-simple-select-label">Pet Type</InputLabel>
          <Select
          label="Type"
          placeholder="Select pet's Type"
          value={selectedState}
          
          onChange={(e) => setSelectedState(e.target.value)}
          fullWidth
          
           
            {...field}
        >
          <MenuItem>--Select type--</MenuItem>
          {availableState?.states.map((e, key) => {
            return (
              <MenuItem value={e.name} key={key}>
                {e.name}
              </MenuItem>
            );
          })}
        </Select></FormControl>
        )}
      />

<Controller
        control={control}
        name="Age"
        render={({ field }) => (
          <TextField
          id="dob"
          label="Age"
          variant="outlined"
          placeholder="Enter Pet's Age in years"
          fullWidth
          required
          margin="normal"
          {...field}
        />
        )}
      />

      
<Controller
        control={control}
        name="colour"
        render={({ field }) => (
          <FormControl fullWidth margin="normal" >
  <InputLabel id="demo-simple-select-label">Colour</InputLabel>
          <Select
          label="colour"
          placeholder="Enter pet's Colour"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          fullWidth
            required
            margin="normal"
            {...field}
        >
          <MenuItem>--Select type--</MenuItem>
          <MenuItem value="Black">Black</MenuItem>
          <MenuItem value="Beige">Beige</MenuItem>
          <MenuItem value="Brown">Brown</MenuItem>
          <MenuItem value="Gold">Gold</MenuItem>
          <MenuItem value="White">White</MenuItem>
        </Select></FormControl>
        )}
      />

    </>
  );
};
const BookAppointment = () => {
  const { control } = useFormContext();
  const [service1, setservice1] = useState();
  const [slot, setslot] = useState();

  return (
    <>
       

        <Controller
        control={control}
        name="service"
        render={({ field }) => (
        <FormControl fullWidth margin="normal" >
        <InputLabel id="demo-simple-select-label">services</InputLabel>
          <Select
          label="services"
          placeholder="Select service"
          value={service1}
          required
          onChange={(e) => setservice1(e.target.value)}
          fullWidth  
         
            {...field}
        >
          <MenuItem>--Select Service--</MenuItem>
          <MenuItem value="Vaccination">Vaccination</MenuItem>
          <MenuItem value="General Treatment">General Treatment</MenuItem>
          <MenuItem value="Flea and tick control">Flea and tick control</MenuItem>
          <MenuItem value="Deworming">Deworming</MenuItem>
          <MenuItem value="Spaying/Neutering">Spaying/Neutering</MenuItem>
          <MenuItem value="Gromming">Gromming</MenuItem>
          <MenuItem value="Dental Care">Dental Care</MenuItem>
        </Select></FormControl>
        )}
      />



     
<Controller
        control={control}
        name="Slot"
        render={({ field }) => (
          <FormControl fullWidth margin="normal" >
          <InputLabel id="demo-simple-select-label">Slot</InputLabel>
          <Select
          label="Slot"
          placeholder="Select Slot"
          value={slot}
          required
          onChange={(e) => setslot(e.target.value)}
          fullWidth
          {...field}
        >
          <MenuItem>--Select slot--</MenuItem>
          <MenuItem value="15 May(10am)">15 May(10am)</MenuItem>
          <MenuItem value="15 May(4pm)">15 May(4pm)</MenuItem>
          <MenuItem value="16 May(5pm)">16 May(5pm)</MenuItem>
          <MenuItem value="17 May(2pm)">17 May(2pm)</MenuItem>
          <MenuItem value="18 May(10pm)">18 May(10pm)</MenuItem>
        </Select></FormControl>
        )}
      />

     
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PetParent />;

    case 1:
      return <Pet />;
    case 2:
      return <BookAppointment />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {

  
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      petName:"",
      category:"",
      type: "",
      colour:"",
      service:"",
      Slot:""
     
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  const onSubmit = (data) => {
  console.log(data);
  };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          
       
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You for booking appointment
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
