import { MuiThemeProvider } from "@material-ui/core";
import { IStore } from "interfaces/common/IStore";
import { computed } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Router, Switch } from "react-router";
import { routes } from "routes";
import { mapRoutes } from "utils";
import { browserHistory } from "utils/history";
import { theme } from "utils/theme";

@inject("store")
@observer
export class AppContainer extends Component<IStore> {
    @computed
    get store() {
        return this.props.store!;
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router history={browserHistory}>
                    <Switch>{mapRoutes(routes)}</Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}
