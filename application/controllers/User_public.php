<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class User_public extends CI_Controller
{
	function __contstruct()
	{
		parent::__construct();
	}

	public function index()
	{
		$this->load->view('user_public');
	}
}

 ?>