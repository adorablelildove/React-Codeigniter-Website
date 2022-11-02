<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class ReactApi_model extends CI_model {

	public function get_products()
	{
		$this->db->select('*');
		$this->db->from('produk');
		$this->db->order_by('timestamp', 'DESC');
		$this->db->limit(3);
		$query = $this->db->get();
		return $query->result();
	}

	public function get_blogs()
	{
		$this->db->select('*');
		$this->db->from('blog');
		$this->db->order_by('tgl', 'DESC');
		$query = $this->db->get();
		return $query->result();
	}

	public function get_blog_details($id_blog)
	{
		
		$query = $this->db->get_where('blog', array('id_blog' => $id_blog));
        return $query->result();  
	}

	public function blogSidebar()
	{
		$this->db->select('*');
		$this->db->from('blog');
		$this->db->order_by('tgl', 'DESC');
		$this->db->limit(3);
		$query = $this->db->get();
		return $query->result();
	}

	public function get_all_products()
	{
		$this->db->select('*');
		$this->db->from('produk');
		$this->db->order_by('timestamp', 'DESC');
		$query = $this->db->get();
		return $query->result();
	}

	public function countAllProducts()
	{
		$query = $this->db->get('produk')->num_rows();
		return $query->result();
	}

}

 ?>