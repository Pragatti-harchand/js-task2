import React, { Component } from 'react'

export default class TempForm extends Component {
    state = {
        formData: null,
        persons: [], 
        mode: 'create',
        selectedId: null
    }

    handleSubmit = (e) => {
        console.log(e.target)
        e.preventDefault();
        let allData = {}
        let formData  = new FormData(e.target)
        for(let [key, value] of formData) {
            allData[key] = value
            console.log(key, value)
        }
        this.setState({formData: allData})
        this.setState({persons: [...this.state.persons, allData]})

        
    }
    
    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" /> <br />
                    <input type="radio" name="gender" value="male" /> Male
                    <input type="radio" name="gender" value="female" /> Female<br />
                    <input type="checkbox" name="location1" id="" value="Mohali" /> Mohali
                    <input type="checkbox" name="location2" id="" value="Chandgarh" /> Chandigarh
                    <input type="checkbox" name="location3" id="" value="Ambala" /> Ambala
                    <input type="checkbox" name="location4" id="" value="Patiala" /> Patiala <br/>
                    <select name="ageGroup" id="">
                        <option value="teenager">Teen</option>
                        <option value="adult">Adult</option>
                        <option value="senior">Senior</option>
                    </select>
                    <button type="submit">Add</button>
            </form>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Location</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    {this.state.persons.map(el=>(
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.gender}</td>
                            <td>{`${el.location1}  ${el.location2}`}</td>
                            <td>{el.ageGroup}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
    }
}
