import { Box, Typography, useTheme, Tab, Tabs,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { useNavigate } from "react-router-dom";

const Candidatos = () => {

  let navigate = useNavigate();

  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
    let path = `/patient `; 
    navigate(path);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
   
    {
      field: "Hemoglobina",
      headerName: "Hemoglobina Glicosilada",
      width: 150,
      align: "center",
      cellClassName: "name-column--cell",
    },
    {
      field: "priority",
      headerName: "Prioridad",      
      cellClassName: "name-column--cell",
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,      
      cellClassName: "name-column--cell",
    },
    {
      field: "idType",
      headerName: "Tipo ID",  
      width: 50,     
      cellClassName: "name-column--cell",
    },
    {
      field: "numId",
      width: 150, 
      headerName: "Número de Documento",      
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Edad",
      width: 50,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "rute",
      headerName: "Ruta", 
      width: 100,     
      cellClassName: "name-column--cell",
    },
    {
      field: "testDiagnostic",
      width: 120,
      headerName: "Prueba Diagnóstica",      
      cellClassName: "name-column--cell",
      align: "center",
    },
    {
      field: "pendingActivity",
      width: 130,
      headerName: "Actividades Pendientes",      
      cellClassName: "name-column--cell",
      align: "center",
    }, 
    {
      field: "",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Gestionar
          </Button>
        );
      }
    },   
  ];


  return (        
         <Box
         m="10px 0 0 0"
         height="65vh"
         width="118vh"
         sx={{
           "& .MuiDataGrid-root": {
             border: "none",
           },
           "& .MuiDataGrid-cell": {
             borderBottom: "none",
           },
           "& .name-column--cell": {
             color: colors.black[100],
           },
           "& .MuiDataGrid-columnHeaders": {
             backgroundColor: colors.white[100],
             borderBottom: "none",
           },
           "& .MuiDataGrid-virtualScroller": {
             backgroundColor: colors.white[100],
           },
           "& .MuiDataGrid-footerContainer": {
             borderTop: "none",
             backgroundColor: colors.white[100],
           },
           "& .MuiCheckbox-root": {
             color: `${colors.greenAccent[200]} !important`,
           },
           "& .css-1foozea-MuiDataGrid-root":{
             color: "black",
           },
           "& .css-bvbdia-MuiTablePagination-root":{
            color: "black",
          },
         }}
       >
         <DataGrid rows={mockDataTeam} columns={columns} />
       </Box> 
  );
};

export default Candidatos;