function check_clear(){
    Swal.fire({
            title: 'If you go to main,\nyour answer will be initialized.',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2D49F5',
            cancelButtonColor: '#BDC4F3',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                location.href='/clear';
            }
    });
}