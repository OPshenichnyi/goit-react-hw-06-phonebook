import { CssFilterWrrap } from "./Filter.styled"


export const Filter = ({filterContact}) => {
    return (
        <CssFilterWrrap>
            <label htmlFor="name">
                Filter
                <br />
                <input
                    type="text"
                    name="filter"
                    onChange={(e) => {
                        e.preventDefault()
                        filterContact(e.target.value)
                    }}
                />
            </label>
        </CssFilterWrrap>
    )
}