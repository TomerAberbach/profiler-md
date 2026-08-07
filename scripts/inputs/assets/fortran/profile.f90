! Parses a JSON document with json-fortran and walks the statuses it contains,
! summing the length of every tweet's text so the parse result is used.
!
! Usage: profile <json-file> <iterations>
program profile
   use json_module, only: json_file
   implicit none

   type(json_file) :: json
   character(len=:), allocatable :: text
   character(len=4096) :: argument
   character(len=32) :: index_text
   integer :: iterations, iteration, status_index, total
   logical :: found

   call get_command_argument(1, argument)
   call get_command_argument(2, index_text)
   read (index_text, *) iterations

   total = 0
   do iteration = 1, iterations
      call json%initialize()
      call json%load(filename=trim(argument))
      if (json%failed()) then
         call json%print_error_message()
         stop 1
      end if

      status_index = 1
      do
         write (index_text, '(I0)') status_index
         call json%get('statuses('//trim(index_text)//').text', text, found)
         if (.not. found) exit
         total = total + len(text)
         status_index = status_index + 1
      end do

      call json%destroy()
   end do

   write (*, '(A,I0)') 'total text bytes: ', total
end program profile
