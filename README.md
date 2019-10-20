Pull source from develop -> work with git: https://app.asana.com/0/1136217922135785/1136486966687855
- Document: https://demos.creative-tim.com/light-bootstrap-dashboard-react/#/documentation/tooltips
- Document-react-bootstrap: https://react-bootstrap.github.io/components/alerts
Form Input:
import FormInputs from 'components/FormInputs/FormInputs.jsx';
<FormInputs
    ncols = {["col-md-6" , "col-md-6"]}
    proprieties = {[
        {
         type : "text",
         bsClass : "form-control",
         placeholder : "Input"
        },
        {
         type : "text",
         bsClass : "form-control",
         placeholder : "Success",
         defaultValue : "Success",
         className: "valid"
        }
    ]}
/>

Name	        Required?	Type	        Default	        Description
ncols	        yes	        array	        null	        Use this prop to tell the component how the row should be divided.
proprieties	yes	        array	        null	        Use this prop to tell the component what kind of input should be rendered for the each specified col.