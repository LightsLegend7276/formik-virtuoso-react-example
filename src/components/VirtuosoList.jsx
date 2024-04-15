import React, { memo } from 'react';
import { Virtuoso } from 'react-virtuoso'
import { Field } from 'formik'
import { NormalCheckbox } from './FormikForm'
import { data } from './utils/Data'

const VirtuosoList = memo(() => {
    return (
        <Virtuoso
        style={{ height: 200, }}
        data={data}
        itemContent={(i, checkbox) => (
            <Field key={`Checkbox ${i + 1}`} id={`Checkbox ${i + 1}`} value={(i + 1).toString()} label={`Checkbox ${i + 1}`} as={NormalCheckbox} {...checkbox} />
        )}
         />
    );
});

VirtuosoList.displayName = "VirtuosoList";

export default VirtuosoList;