import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Icon from "@material-ui/core/Icon";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const titleStyle = {
  marginLeft: "10px"
};

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Icon>
            assignment_turned_in
          </Icon>
          <Typography variant="headline" color="inherit" style={titleStyle}>
            TaskMaster
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;