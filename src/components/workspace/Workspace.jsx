import Paper from '@mui/material/Paper';
import "./workspace.scss"
import { styled } from '@mui/material/styles';
import Button from "../Button"
import { Link, useNavigate, useParams } from 'react-router-dom';
import AddBoardModel from '../AddBoardModel';
import { useSelector } from 'react-redux';



const CustomePaper = styled(Paper)(({ theme }) => ({

  width:"300px",
  marginTop:"20px",
  padding:"10px",
  height:"100px",
  backgroundColor:"#172B4D",
  color:"#fff",
  fontSize:"16px"
}));


function Workspace() {
  const boards = useSelector((store)=> store.board.boards);
  const navigate = useNavigate()
  const {userID} = useParams()

  const listOfWorkSpaces = boards.filter((board)=>{
      return board.userID == userID
  })


  function handleBoardClick(boardID){
    navigate(`/${userID}/dashboard/${boardID}/cards`)
  }

  return (
    <div className='workspaces-wrapper'>

      {listOfWorkSpaces.map((board) => {
        return <CustomePaper elevation={1} key={board.boardID} onClick={()=>handleBoardClick(board.boardID)}>
          {/* <Link to="/cards">{board.boardName}</Link> */}
          {board.boardName}
        </CustomePaper>
      })}
      
          <CustomePaper sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <AddBoardModel/>
          </CustomePaper>
    </div>
  )
}

export default Workspace
