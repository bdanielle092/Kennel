import React, {useState, useEffect} from "react"
import OwnerManager from "../../modules/OwnerManager"
import "./OwnerForm.css"

const OwnerEditForm = props => {
    const[owner, setOwner] = useState({name: "", quote: "", picture: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...owner };
        stateToChange[evt.target.id] = evt.target.value;
        setOwner(stateToChange);
    };

    const updatedExistingOwner = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedOwner = {
            id: props.match.params.ownerId,
            name: owner.name,
            quote: owner.quote,
            picture: owner.picture
        };

        OwnerManager.update(editedOwner)
        .then(() => props.history.push("/owners"))
    }

    useEffect (() => {
        OwnerManager.get(props.match.params.ownerId)
        .then(owner => {
            setOwner(owner);
            setIsLoading(false);
        });
    }, []);

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
                      value={owner.name}
                      />
                      <label htmlFor="name"> Owner's Name</label>

                      <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="quote"
                        value={owner.quote}
                        />
                        <label htmlFor="quote">Quote</label>

                </div>
                <div className="alignRight">
                    <button 
                      type="button" disabled={isLoading}
                      onClick={updatedExistingOwner}
                      className="btn btn-primary"
                      >Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    );
}

export default OwnerEditForm