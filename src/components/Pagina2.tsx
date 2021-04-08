import React from 'react'

export const Pagina2 = ({ data }) => {
    return(
        <div>
<h3>Pagina 2</h3>
<hr/>
<pre>

    { JSON.stringify( data, null, 2 ) }
</pre>


        </div>
    )
}