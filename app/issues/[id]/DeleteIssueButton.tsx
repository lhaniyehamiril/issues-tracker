import IconTrash from "./IconTrash"

const DeleteIssueButton = ({issueId}: {issueId: number}) => {
  return (
    <button className='text-bold items-center cursor-pointer flex text-red-400 -mt-8 bg-white px-2 py-[2px] -ml-[1.4rem]  rounded-[0.65rem] text-2xl'>
      <IconTrash />
    </button>
  )
}

export default DeleteIssueButton
