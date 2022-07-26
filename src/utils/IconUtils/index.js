import * as Icons from "@mui/icons-material";

const DynamicIcon = ({ name, ...rest }) => {
    const IconComponent = Icons[name];
    return IconComponent ? <IconComponent {...rest} /> : null;
};

export { DynamicIcon } 