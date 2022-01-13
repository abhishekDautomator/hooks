import React, {forwardRef, useState, useImperativeHandle} from 'react';

const Button = forwardRef((props, ref) =>{
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle(){
            setToggle(!toggle);
        }
    }));

    return (
        <div>
            <button className="btn-primary"
            onClick={() => (
                function alterToggle(){
                    setToggle(!toggle);
                }
            )}>
                Button from Child
            </button>
            <div>
                {toggle && <span className="span">Toggle</span>}
            </div>
        </div>
    );
});

export default Button;