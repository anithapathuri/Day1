function CustomerReviews() {
    const customerReviews = [
        { name: 'Anitha', review: 'Great service, very satisfied!' },
        { name: 'Meher', review: 'Amazing experience, highly recommend.' },
        { name: 'Sandeepthi', review: 'The staff was very helpful and friendly.' },
        { name: 'Mrudula', review: 'Quick response and excellent customer care.' },
        { name: 'lasya', review: 'Affordable prices and high-quality products.' },
    ];

    return (
        <div>
            <h1>Customer Reviews</h1>
            <ul>
                {customerReviews.map((customer, index) => (
                    <li key={index}>
                        <div>
                            <img src="s23.jpg" alt="Customer" style={{ width: '16px', height: '16px', marginRight: '20px' }} />
                            {customer.name}
                        </div>
                        <div>{customer.review}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerReviews;