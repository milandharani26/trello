import TextField from "@mui/material/TextField";
import "./cards.scss";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCard } from "../../store/slices/cardSlice";
import { useParams } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: "10px 20px",
    //   padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const AddcardInput = styled(TextField)(({ theme }) => ({
    height: "20px",
}));

const data = [
    {
        boardID: 1,
        cardID: 1,
        cardTitle: "this is first",
    },
    {
        boardID: 1,
        cardID: 2,
        cardTitle: "this is 2",
    },
    {
        boardID: 1,
        cardID: 3,
        cardTitle: "lasttt",
    },
];

export default function Cards() {
    const [isAddCard, setIsAddCard] = useState(false);
    const [cardTitle, setCardTitle] = useState("");

    const dispatch = useDispatch();
    const {boardID} = useParams();
    const cards = useSelector((store)=>store.card.cards);

    const filteredcards = cards.filter((card)=>{
        return card.boardID == boardID
    })


    function handleAddCardInput() {
        setIsAddCard(() => !isAddCard);
    }

    function addcard(){
       //boardID, cardTitle
        dispatch(createCard(boardID, cardTitle))
        setIsAddCard(() => !isAddCard);
    }

    return (
        <div>
            <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
                {filteredcards.map((card) => {
                    return (
                        <Item key={card.cardID}>
                            <div className="card-inner">
                                <div className="card-header">
                                    <p>{card.cardTitle}</p> <p>---</p>
                                </div>
                                <div>
                                    <ul className="card-list-todo">
                                        <li>list 1</li>
                                        <li>list 1</li>
                                    </ul>
                                </div>
                                <div className="card-addcard">
                                    <button>+ add card</button>
                                </div>
                            </div>
                        </Item>
                    );
                })}

                <Item sx={{ width: "200px" }}>
                    {isAddCard && (
                        <>
                            <TextField
                                sx={{ marginBottom: "15px" }}
                                value={cardTitle}
                                onChange={(e) => setCardTitle(e.target.value)}
                            />

                            <div className="card-add-btn" onClick={addcard}>
                                <button>+ add</button>
                            </div>

                        </>

                    )}

                    {!isAddCard && (
                        <div className="card-add-btn" onClick={handleAddCardInput}>
                            <button>+ add another list</button>
                        </div>
                    )}
                </Item>

            </Stack>
        </div>
    );
}
