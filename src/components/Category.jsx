import { Stack } from "@mui/material";
import { category } from "./data";
const Category = ({ categorySelectedHandler, categorySelected }) => {
    return <Stack direction={"row"} sx={{ display: "flex", justifyContent: "center", overflowX: "scroll", left: '0' }}>
        {category.map(item => (
            <button key={item.name}
             className="category-btn" 
             onClick={() => categorySelectedHandler(item.name)}
             style={{background: item.name === categorySelected && '#f1f1f1',color: item.name === categorySelected && '#272727'}}
             >{item.name}</button>
        ))}
    </Stack>
}

export default Category