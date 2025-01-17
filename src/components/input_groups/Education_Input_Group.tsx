/* eslint-disable react/jsx-pascal-case */
import { Education } from '../../interfaces/interface-models'
import Detail_Input_Field from '../micro_components/Detail_Input_FIeld'
import Input_Field from '../micro_components/Input_Field'

interface Props {
    item: Education
    index: number
    on_input_array_change: (
        property: 'experience' | 'education' | 'projects',
        index: number
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void
    on_details_input_array_change: (
        property: 'experience' | 'education' | 'projects',
        index: number,
        detail_index: number
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void
    on_detail_add: (
        property: 'experience' | 'education' | 'projects',
        index: number,
        detail_index: number
    ) => void
    on_detail_delete: (
        property: 'experience' | 'education' | 'projects',
        index: number,
        detail_index: number
    ) => void
    on_item_delete: (
        property: 'experience' | 'education' | 'projects',
        id: string
    ) => void
    on_item_add: () => void
}

function Education_Input_Group({
    item,
    index,
    on_input_array_change,
    on_details_input_array_change,
    on_detail_add,
    on_detail_delete,
    on_item_delete,
    on_item_add,
}: Props) {
    const { id, education_institute, program, start_date, end_date, details } =
        item

    return (
        <div key={index} className="flex flex-col gap-2.5 input_form_group">
            <Input_Field
                label="Education Institute"
                value={education_institute}
                name="education_institute"
                onChange={on_input_array_change('education', index)}
            />
            <Input_Field
                label="Program"
                value={program}
                name="program"
                onChange={on_input_array_change('education', index)}
            />
            <Input_Field
                label="Start Date"
                value={start_date}
                name="start_date"
                onChange={on_input_array_change('education', index)}
            />
            <Input_Field
                label="End Date"
                value={end_date}
                name="end_date"
                onChange={on_input_array_change('education', index)}
            />
            {details.map((details_item, detail_index) => {
                return (
                    <Detail_Input_Field
                        key={`education_description-${detail_index}`}
                        id={`education_description-${detail_index}`}
                        property="education"
                        index={index}
                        detail_index={detail_index}
                        label="Description"
                        value={details_item}
                        name={`education_description-${detail_index}`}
                        onChange={on_details_input_array_change(
                            'education',
                            index,
                            detail_index
                        )}
                        on_detail_add={on_detail_add}
                        on_detail_delete={on_detail_delete}
                    />
                )
            })}
            <div className="flex gap-2 w-full h-10 justify-end mt-1 -translate-x-0.5">
                {details.length === 0 && (
                    <button
                        className="form_button add_description_button"
                        onClick={() => {
                            on_detail_add('education', index, 0)
                        }}
                    >
                        + Description
                    </button>
                )}
                <button
                    type="button"
                    className="form_button"
                    onClick={() => on_item_delete('education', id)}
                >
                    Delete
                </button>
                <button
                    type="button"
                    className="add_button form_button"
                    onClick={on_item_add}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default Education_Input_Group
