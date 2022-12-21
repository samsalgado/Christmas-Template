import React, {useMemo} from 'react';
import {Grid, Row} from 'react-flexbox-grid'
import {Trees} from './trees'
import "./App.css"
interface Props {
    text?: string;
}
export const TreeTemplate: React.FC<Props> = () => {
    const trees = useMemo(() =>
    [
        {
            id:1,
            tree: Trees.tree1,
            price: "$100"
        },
        {
            id:2,
            tree: Trees.tree2,
            price:"$100"
        },
        {
            id:4,
            tree:Trees.tree4,
            price:"$100"
        },
        {
            id:5,
            tree:Trees.tree5,
            price:"$100"
        },
        {
            id:6,
            tree:Trees.tree6,
            price:"$100"
        },
    ], [])
    return (
        <>
        <h1 className='center'>Trees this Year</h1>
        <Grid>
            <Row>
                {trees.map((val, key) => {
                    return (
                        <div key={key}>
                        <img className='pic1' src={val.tree} alt="" />
                        <h2>{val.price}</h2>
                        </div>
                    )
                })}
            </Row>
        </Grid>
        </>
    )
}