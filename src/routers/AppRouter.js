import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'


const Nav = () => (
    <nav>
        <NavLink exact to="/" activeClassName='active'>Home</NavLink> |
        <NavLink to="/contact#email" activeClassName='active'>Contact</NavLink> |
        <NavLink exact to="/products" activeClassName='active'>Products</NavLink> |
        <NavLink to="/products/11?orderby=price" activeClassName='active'>Products Details</NavLink> |
    </nav>
);

const Header = () => (
    <header>
        <h1>Github Finder</h1>
    </header>
);

const HomePage = () => (
    <>
        <div>Home Page</div>

    </>
);

const ContactPage = (props) => {
    console.log(props);
    return (
        <>
            <div>Contact Page</div>
        </>
    );
};

const ProductsPage = () => (
    <>
        <div>Product Page</div>

    </>
);

const ProductsDetailsPage = (props) => {
    console.log(props);
    return (
        <>
            <div>Product Details Page</div>
            <div>{props.match.params.id}</div>
        </>
    );
};

const NotFoundPage = () => (
    <>
        <div>404 Page</div>

    </>
);

const AppRouter = () => (
    <BrowserRouter >
        <Header />
        <Nav />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/contact' component={ContactPage} />
            <Route exact path='/products' component={ProductsPage} />
            <Route path='/products/:id' component={ProductsDetailsPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter >
);

export default AppRouter;