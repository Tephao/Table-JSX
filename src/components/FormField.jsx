function FormField({label, type = "text", change,value}){
return (
    <div>
    <b><label>{label}</label></b>
    <br />
    <input type={type} onChange={(e)=> change(e.target.value)}value={value}/>
    </div>
)

}

export default FormField;