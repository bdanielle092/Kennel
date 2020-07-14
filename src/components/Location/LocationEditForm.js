import React, {useState, useEffect} from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

const LocationEditForm = props => {
    const[location, setLocation] = useState({name: "", address: "", picture: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...location };
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
    };

    const updatedExistingLocation = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedLocation = {
            id: props.match.params.locationId,
            name: location.name,
            address: location.address,
            picture: location.picture
        };

        LocationManager.update(editedLocation)
        .then(() => props.history.push("/locations"))
    }

    useEffect (() => {
        LocationManager.get(props.match.params.locationId)
        .then(location => {
            setLocation(location);
            setIsLoading(false);
        });
    }, [props.match.params.locationId]);

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input 
                      type="text"
                      required
                      className="form-control"
                      onChange={handleFieldChange}
                      id="name"
                      value={location.name}
                      />
                      <label htmlFor="name"> Location Name</label>

                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="address"
                        value={location.address}
                        />
                        <label htmlFor="address">Address</label>

                </div>
                <div className="alignRight">
                    <button 
                      type="button" disabled={isLoading}
                      onClick={updatedExistingLocation}
                      className="btn btn-primary"
                      >Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    );
}

export default LocationEditForm