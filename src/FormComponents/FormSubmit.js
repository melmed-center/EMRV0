import React from 'react'
import '../styles/style.css'
import ExportButton from '../Components/ExportButton';
import * as PropTypes from 'prop-types';

class FormSubmit extends React.Component {

    render() {
        const {divIdsToPrint} = this.props;
        return (
            <div>
                <div className={"centered"}>
                    {"You are now finished with the form."}
                </div>

                <div style={{paddingBottom: '20px'}} className={"centered"}>
                    {"Please click below to submit and export."}
                </div>
                <div style={{paddingBottom: '20px', fontSize: '30px', fontColor: 'black'}} className={"centered"}>
                    {"Please make your your browser as large as possible before exporting."}
                </div>

                <div style={{paddingBottom: '50px'}} className={"centered"}>
                    <ExportButton divIdsToPrint={divIdsToPrint} pdfName="melmed-forms"/>
                </div>

            </div>
        )
    }
}

FormSubmit.propTypes = {
    divIdsToPrint: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FormSubmit