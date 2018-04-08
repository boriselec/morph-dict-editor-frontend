import React from 'react';
import $ from 'jquery';

function postLemma(url, json, onPost) {
    $.ajax({
        url      : url + '/api/lemma',
        type     : 'POST',
        data     : json,
        contentType: 'text/plain',
        crossDomain: true,
        success: data => {
            onPost();
            $.ajax({
                url      : url + '/admin/sync/dict/out',
                type     : 'POST',
                crossDomain: true,
                global: false,
                error: (xhr, status, err) => console.error(url, status, err.toString())
            });
        },
        error: (xhr, status, err) => console.error(url, status, err.toString())
    });
}

const Edit = ({url, onPost}) => (
    <div className={'container'}>
        <div className={'paginationContainer'}>
            <div className='my-3 p-3 bg-white rounded box-shadow'>
                E.g. <br/>
                {JSON.stringify({l: {t: 'лайтово', g: ['ADVB', 'Prdx']}, f: [{t: 'лайтово'}]})}
                <br/>
                <br/>

                <form onSubmit={function(e) {e.preventDefault(); postLemma(url, e.target[0].value, onPost)}}>
                    <div className='form-group'>
                        <textarea className='form-control' placeholder='Json' aria-label='Json' type='text'/>
                    </div>
                    <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Add</button>
                </form>
            </div>
        </div>
    </div>
);

export default Edit;