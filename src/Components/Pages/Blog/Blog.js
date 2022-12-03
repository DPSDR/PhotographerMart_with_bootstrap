import React from 'react';
import { useState } from 'react';

const difference = [
    {
        authentication: 'Authentication verifies who the user is.',
        authorization: 'Authorization determines what resources a user can access.'
    },
    {
        authentication: 'Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user',
        authorization: 'Authorization works through settings that are implemented and maintained by the organization.'
    },
    {
        authentication: 'Authentication is the first step of a good identity and access management process.',
        authorization: 'Authorization always takes place after authentication.'
    },
    {
        authentication: 'Authentication is visible to and partially changeable by the user.',
        authorization: "Authorization isn't visible to or changeable by the user."
    },
    {
        authentication: 'Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.',
        authorization: 'Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.'
    }
]

const Row = (props) => {
    const { authentication, authorization } = props;
    return (<tr>
        <td className='p-3'>{authentication}</td>
        <td className='p-3'>{authorization}</td>
    </tr>)
}

const Table = (props) => {
    const { data } = props;
    return (<table className="table table-striped">
        <tbody>
            <tr>
                <th className='p-3'>Authentication</th>
                <th className='p-3'>Authorization</th>
            </tr>
            {data.map((row, index) =>
                <Row key={index} authentication={row.authentication}
                    authorization={row.authorization} />
            )}
        </tbody>
    </table>)
}

const Blog = () => {
    const [rows] = useState(difference);


    return (
        <div className='container' style={{ marginTop: '7rem', marginBottom: '5rem' }}>
            <div className="mb-5">
                <h2 className='text-secondary mb-5'>1. Difference between Authentication and Athorization</h2>
                <Table data={rows} />
            </div>
            <div className="mb-5">
                <h2 className="text-secondary mb-4">2. 6 Useful Firebase Services Other Than Authentication</h2>
                <ul className='fs-5 ms-3'>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Predictions</li>
                    <li>Google Analytics</li>
                    <li>Remote Config</li>
                    <li>Hosting</li>
                </ul>
            </div>
            <div>
                <h2 className="text-secondary mb-3">3. 5 best optoins to implement Authentication alternate to firebase</h2>
                <ul className='fs-5 ms-3'>
                    <li>Flutter</li>
                    <li>Parse</li>
                    <li>Back4App</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;