import { useContext } from "react";
import { TestContext } from "./testContext";

const Item = (props) => {
    const context = useContext(TestContext);
    const handleDeleteItem = (e) => {
        context.setTimeArr(context.timeArr.filter(t=>t != e.target.innerHTML))
        alert(e.target.innerHTML)
    }
    return (
        <div className="Item_style" onClick={handleDeleteItem}>
            {props.children}
        </div>
    )
}
export default Item;