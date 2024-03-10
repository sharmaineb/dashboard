import React from 'react';

const style = {

}

const ToDo = () => {
  return (
    <li className={style.li}>
        <div className={style.row}>
            <input type='checkbox' />
            <p className={style.text}>{todo}</p>
        </div>

    </li>
  )
}

export default ToDo;